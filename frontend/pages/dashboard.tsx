import React, { useState } from "react";
import Search from "../dashboardComponents/Search";
import SummarizeSpeech from "../dashboardComponents/SummarizeSpeech";
import SummarizeTranscript from "../dashboardComponents/SummarizeTranscript";
import Table from "../dashboardComponents/Table";
import TableNav from "../dashboardComponents/TableNav";

export default function dashboard() {
  return (
    <>
      <section className="dashboard bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col justify-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="overflow-x-auto overflow-y-hidden relative">
            <div className="grid grid-cols-2 gap-4">
              <SummarizeTranscript></SummarizeTranscript>
              <SummarizeSpeech></SummarizeSpeech>
            </div>
            <Table></Table>
            <TableNav></TableNav>
          </div>
        </div>
      </section>
    </>
  );
}
