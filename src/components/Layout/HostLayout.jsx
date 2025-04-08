import { Outlet } from "react-router"
import HostHeader from "../Header/HostHeader"

export default function HostLayout() {
    return (
        <div>
                <HostHeader />
                <Outlet />
        </div>
    )
}