import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Palette from "@material-ui/icons/Palette";
import TextureIcon from "@mui/icons-material/Texture";
import TuneIcon from "@mui/icons-material/Tune";
import TrafficIcon from "@material-ui/icons/Traffic";
import PatternButton from "./pages/components/PatternButton";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "reactjs-popup/dist/index.css";
import { getDeviceList } from "./serverCommunication";
// Pages
import SelectAnimation from "./pages/SelectAnimation";
import SetSolidPreset from "./pages/SetSolidPreset";
import CreateColorSliders from "./pages/CreateColorSliders";
import CustomPattern from "./pages/CustomPattern";

import AddNewDevicePopup from "./pages/components/AddNewDevicePopup";

import { DictToDeviceList } from "./DisplayDevice";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Navigation() {
    var defaultLandingPage = <SelectAnimation />;
    const classes = useStyles();
    const theme = useTheme();
    const [devices, setDevices] = React.useState([]);
    const [dropdownList, setDropdownList] = React.useState([]);
    const [currentDevice, setCurrentDevice] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(defaultLandingPage);
    const [newDevicePopupOpen, setNewDevicePopupOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        getDeviceList()
            .then((res) => setDevices(DictToDeviceList(res.data)))
            .catch((_err) => {});
    }, [newDevicePopupOpen]);

    useEffect(() => {
        const deviceOptions = devices.map((d) => {
            return {
                value: d.ip_address,
                label: `${d.name} - ${d.ip_address}`,
            };
        });
        setDropdownList(deviceOptions);
        if (dropdownList.length) {
            setCurrentDevice(dropdownList[0].value);
        }
    }, [devices]);

    let dropdown =
        devices.length > 0 ? (
            <Dropdown
                options={dropdownList}
                value={currentDevice}
                onChange={(dropValue) => {
                    setCurrentDevice(dropValue.value);
                }}
                placeholder="Select a Device"
            />
        ) : (
            <>No Devices Available</>
        );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        RGB Everywhere
                    </Typography>
                    {dropdown}
                    <AddNewDevicePopup
                        open={newDevicePopupOpen}
                        closePopup={() => setNewDevicePopupOpen(false)}
                    />
                    <PatternButton
                        buttonText="Add New Device"
                        onClick={() =>
                            setNewDevicePopupOpen(!newDevicePopupOpen)
                        }
                    />
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem
                        button
                        key={"choosePattern"}
                        onClick={() => {
                            setPage(
                                <SelectAnimation
                                    currentDevice={currentDevice}
                                />
                            );
                        }}
                    >
                        <ListItemIcon>
                            <TrafficIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Animated Patterns"} />
                    </ListItem>
                    <ListItem
                        button
                        key={"choosePresetColor"}
                        onClick={() => {
                            setPage(
                                <SetSolidPreset currentDevice={currentDevice} />
                            );
                        }}
                    >
                        <ListItemIcon>
                            <Palette />
                        </ListItemIcon>
                        <ListItemText primary={"Preset Colors"} />
                    </ListItem>
                    <ListItem
                        button
                        key={"CreateColorSliders"}
                        onClick={() => {
                            setPage(
                                <CreateColorSliders
                                    currentDevice={currentDevice}
                                />
                            );
                        }}
                    >
                        <ListItemIcon>
                            <TuneIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Create Color"} />
                    </ListItem>
                    <ListItem
                        button
                        key={"CustomPattern"}
                        onClick={() => {
                            setPage(
                                <CustomPattern currentDevice={currentDevice} />
                            );
                        }}
                    >
                        <ListItemIcon>
                            <TextureIcon />
                        </ListItemIcon>
                        <ListItemText primary={"DIY Patterns"} />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />

                {page}
            </main>
        </div>
    );
}
