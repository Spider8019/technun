export const pageAnimation={
    initial:{
        opacity:0
    },
    animate:{
        opacity:1,
    },
    exit:{
        opacity:0
    }
}

export const navbarLeft={
    initial:{
        y:"-100%",
        opacity:0,
        overflow:"hidden"
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5
        }
    },
    exit:{
        y:'100%',
        opacity:0,
        transition:{
            duration:0.5
        }
    }
}
export const navbarRight={
    initial:{
        y:"100%",
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5
        }
    },
    exit:{
        y:"-100%",
        opacity:0,
        transition:{
            duration:0.5
        }
    }
}
export const navbarLinksContainer={
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            staggerChildren:0.3,
            delayChildren:0.6
        }
    },
    exit:{
        opacity:0,
    }
}

export const navbarLink={
    initial:{
        x:"-50px",
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
    },
    exit:{
        opacity:0
    }
}

export const card={
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
    },
    exit:{
        opacity:0,
    }
}