import { useState } from 'react';
import Modal from './Modal';
import Portal from './Portal';

const Page = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="flex h-screen justify-center items-center">
            <button
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Toggle modal
            </button>
            {showModal && (
                <Portal>
                    <Modal onClose={() => setShowModal(false)} />
                </Portal>
            )}
        </div>
    );
};

export default Page;
