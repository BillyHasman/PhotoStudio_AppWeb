import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Index() {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-white w-screen">
                <Navbar />
            </div>
        </>
    );
}
