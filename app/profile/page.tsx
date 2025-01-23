import SideNavigation from "../components/sideNavOne";

export default function Profile(){
    return <section className="flex">
         <SideNavigation/>
         <div className="bg-red-500 text-white">
            Profile
         </div>
    </section>
}