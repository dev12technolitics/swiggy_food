import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { BiMenu } from 'react-icons/bi';
import AccordionOne from './AccordionOne';

export default function MobileSidebar() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 270 }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
           
            <div className='py-1'>
                <AccordionOne
                    superTitle={"Home"}
                />
                <AccordionOne
                    superTitle={"Shop"}
                />
                <AccordionOne
                    superTitle={"Blog"}
                />
                <AccordionOne
                    superTitle={"Gallery"}
                />
            </div>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div
                        className='w-5'
                        onClick={toggleDrawer(anchor, true)}
                        style={{width: "29px", height:"32px"}}
                    >
                        {/* <div className='w-full box-border mb-[5px] sidebar_overlay_icon transition-all' />
                        <div className='w-full box-border mb-[5px] sidebar_overlay_icon transition-all' />
                        <div className='w-full box-border sidebar_overlay_icon transition-all' /> */}
                        <BiMenu size={30} color="#ffff"/>
                    </div>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
