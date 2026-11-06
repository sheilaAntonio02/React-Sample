import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Manage from "./components/Manage";
import DeleteModal from "./modals/DeleteModal";
import { useState } from "react";
import EditModal from "./modals/EditModal";
import AddModal from "./modals/AddModal";

function App() {

    const [activeNav, setActiveNav] = useState('Home');

    const goToPage = (page) => {
        setActiveNav(page);
    }

    const [deleteModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [addModal, setAddModal] = useState(false)
    const [selectedprofile, setSelectedProfile] = useState(null)
    const [profile, setProfile] = useState(
        [
            {
                id: 1,
                name: 'Lealyn',
                age: 31,
                address: 'Kapalong',
                img: 'https://i.pinimg.com/736x/48/02/a3/4802a344df2c9bc5c94fdfdd8374b9d2.jpg'
            },
            {
                id: 2,
                name: 'Denna',
                age: 22,
                address: 'Talaingod',
                img: 'https://i.pinimg.com/736x/07/30/9c/07309ca62830d2c750ece89f5e6b442a.jpg'
            },
            {
                id: 3,
                name: 'Jieu',
                age: 21,
                address: 'Tagum City',
                img: 'https://i.pinimg.com/736x/69/24/f1/6924f1d316d64d1c53290f4b6da6d263.jpg'
            },
            {
                id: 4,
                name: 'Sheila',
                age: 23,
                address: 'Kapalong',
                img: 'https://i.pinimg.com/736x/8d/5a/11/8d5a11dfea4fe130736249fa608aac78.jpg'
            },
            {
                id: 5,
                name: 'Junel',
                age: 28,
                address: 'Kapalong',
                img: 'https://i.pinimg.com/736x/f6/53/19/f6531977488d8d3eea232579af7ab4f8.jpg'
            },
            {
                id: 6,
                name: 'Marise',
                age: 21,
                address: 'Tagum City',
                img: 'https://i.pinimg.com/736x/55/e0/46/55e04635f91332f6d10e265e7129d84a.jpg'
            },
            {
                id: 7,
                name: 'Ashley',
                age: 21,
                address: 'Laak',
                img: 'https://i.pinimg.com/736x/0b/bd/34/0bbd3439f7b27ef7e64bc43c37ae6b41.jpg'
            },
            {
                id: 8,
                name: 'Herald',
                age: 22,
                address: 'Talaingod',
                img: 'https://i.pinimg.com/736x/7f/a1/57/7fa157751f6e6cf07182024aaa85a6cc.jpg'
            },
            {
                id: 9,
                name: 'Angel',
                age: 24,
                address: 'Monkayo',
                img: 'https://i.pinimg.com/1200x/1e/6e/eb/1e6eebd8b003dcc9e38508397f21aacd.jpg'
            },
            {
                id: 10,
                name: 'Sybil',
                age: 18,
                address: 'Laak',
                img: 'https://i.pinimg.com/736x/18/22/63/182263f173e1f64f833bce704d8d1713.jpg'
            },
            {
                id: 11,
                name: 'Ian',
                age: 25,
                address: 'Monkayo',
                img: 'https://i.pinimg.com/736x/07/30/9c/07309ca62830d2c750ece89f5e6b442a.jpg'
            },
            {
                id: 12,
                name: 'Jash',
                age: 31,
                address: 'Tagum City',
                img: 'https://i.pinimg.com/736x/7b/c3/79/7bc3799aa3ed60f5b5e7c80a5c9c98b1.jpg'
            },
            {
                id: 13,
                name: 'Janine',
                age: 34,
                address: 'Tagum City',
                img: 'https://i.pinimg.com/1200x/a8/ee/52/a8ee52c9ef57b629fb7995e85bd1135b.jpg'
            },
        ]
    )

    const requestDelete = (index) => {
        setSelectedProfile(index);
        setDeleteModal(true)
    }
    const requestEdit = (index) => {
        setSelectedProfile(index);
        setEditModal(true)
    }

    const selectedprofileName = profile[selectedprofile];

    const confirmDelete = () => {
        const ref = [...profile];
        ref.splice(selectedprofile, 1);
        setProfile(ref);
        setDeleteModal(false)
    }
    const confirmEdit = (updateProfile) => {
        const ref = [...profile];
        ref[selectedprofile] = updateProfile;
        setProfile(ref);
        setEditModal(false)
    }
    const confirmAdd = (newStudent) => {
        const ref = [...profile, newStudent];
        setProfile(ref);
        setAddModal(false)

    }

    return (
        <>
            <SideBar onSelectedTab={goToPage} />
            {activeNav === 'Home' &&
                < Home
                    personalInfo={profile}
                />
            }
            {activeNav === 'Manage' &&
                <Manage
                    personalInfo={profile}
                    confirm={requestDelete}
                    onEdit={requestEdit}
                    onAdd={() => setAddModal(true)}
                />
            }
            <DeleteModal
                isOpen={deleteModal}
                onClose={() => setDeleteModal(false)}
                onConfirm={confirmDelete}
                pickProfile={selectedprofileName}

            />
            <EditModal
                isEditModal={editModal}
                onCancel={() => setEditModal(false)}
                onSave={confirmEdit}
                pickProfile={selectedprofileName}

            />

            <AddModal
                isAdd={addModal}
                cancelAdd={() => setAddModal(false)}
                onSave={confirmAdd}
            />
        </>
    )
}
export default App