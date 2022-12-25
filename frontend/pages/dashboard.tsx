import React, { useState } from "react";
import Modal from "../dashboardComponents/Modal";
import Search from "../dashboardComponents/Search";
import Table from "../dashboardComponents/Table";
import TableNav from "../dashboardComponents/TableNav";

const dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="dashboard bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="overflow-x-auto overflow-y-hidden relative">
          <div className="flex justify-between items-center pb-4">
            <button
              className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-3 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Summarize
            </button>
            {showModal && <Modal setOpenModal={setShowModal} />}
            <Search></Search>
          </div>
          <Table></Table>
          <TableNav></TableNav>
        </div>
      </div>
    </section>
  );
};

export default dashboard;
