import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard, MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { GoChecklist } from "react-icons/go";
import { LuLayoutList } from "react-icons/lu";
import { LiaBookSolid } from "react-icons/lia";
import { IoLibraryOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { AiOutlineLogout } from "react-icons/ai";

const sidebarProfile = [
    {
        name: "Ratri Desy",
        desc: "Admin",
        icon: HiUserCircle,
        },
]

const sidebarItems = [
    {
    name: "Dashboard",
    href: "/",
    icon: MdOutlineDashboard,
    },
    {
    name: "User",
    href: "/user",
    icon: FiUsers,
    },
    {
    name: "Pengumuman",
    href: "/pengumuman",
    icon: GoChecklist,
    },
    {
    name: "Kehadiran",
    href: "/kehadiran",
    icon: LuLayoutList,
    },
    {
    name: "Jadwal Mengajar",
    href: "/mengajar",
    icon: LiaBookSolid,
    },
    {
    name: "Jadwal Piket",
    href: "/piket",
    icon: IoLibraryOutline,
    },
]

const sidebarSettings = [
    {
        name: "Profil",
        href: "/profil",
        icon: HiOutlineUserCircle,
        },
        {
        name: "Keluar",
        href: "/keluar",
        icon: AiOutlineLogout,
        },
]

export default function Sidebar(){

    const router = useRouter();

    return(

        <div>
            <aside className="sidebar">

                <div className="sidebar-top">
                    <Image
                    src="logo.svg"
                    width={60}
                    height={60}
                    alt="LOGO"
                    className="sidebar-logo"
                    />
                </div>

                <div className="sidebar-list">
                    {sidebarProfile.map(({name, desc, icon: Icon}) => (
                    <li className="sidebar-profile" key={name}>
                        <div className="sidebar-profile-icon">
                            <Icon/>
                        </div>
                        <span className="sidebar-profile-name">
                            {name}
                            <span className="sidebar-profile-desc">
                            <br/>
                            {desc}
                            </span>
                        </span>

                    </li>
                    ))}
                </div>

                <p className="sidebar-text">Main Menu</p>

                <ul className="sidebar-list">
                    {sidebarItems.map(({name, href, icon: Icon}) =>(
                        <li className="sidebar-item" key={name}>
                            <Link className={`sidebar-link ${ router.pathname === href ? "sidebar-link-active" : ""}`} href={href}>
                                <div className="sidebar-icon">
                                    <Icon/>
                                </div>
                                <span className="sidebar-name">
                                    {name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <p className="sidebar-text">Settings</p>

                <ul className="sidebar-list">
                    {sidebarSettings.map(({name, href, icon: Icon}) =>(
                        <li className="sidebar-item" key={name}>
                            <Link className={`sidebar-link ${ router.pathname === href ? "sidebar-link-active" : ""}`} href={href}>
                                <div className="sidebar-icon">
                                    <Icon/>
                                </div>
                                <span className="sidebar-name">
                                    {name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

            </aside>
        </div>

    )
}