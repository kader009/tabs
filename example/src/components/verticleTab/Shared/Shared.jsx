import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlay, faSquareCheck, faSquareXmark, faPowerOff, faClockRotateLeft} from '@fortawesome/free-solid-svg-icons';




const Shared = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Replace with the actual total number of pages

  // TODO: Implement logic to fetch data for the current page





  const modalData = () =>{
    // Get the modal and trigger elements
const modalTrigger = document.getElementById('modalTrigger');
const modalTrigger2 = document.getElementById('modalTrigger2');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');

// Open the modal when the trigger is clicked
modalTrigger.addEventListener('click', () => {
  modal.classList.remove('hidden');
});
modalTrigger2.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

// Close the modal when the close button is clicked
modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});

  }


  return (
    <div>
      {/* <!-- Modal --> */}
<div id="modal" className="fixed inset-0 flex items-center justify-center z-50 hidden">
  <div className="bg-white p-8 rounded shadow">
    <h2 className="text-xl font-bold mb-4">Modal Title</h2>
    <p>This is the modal content.</p>
    <button id="modalClose" className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
      Close Modal
    </button>
  </div>
</div>




      <div className="w-full mb-10">
  <table className="min-w-full bg-white">
    <thead>
      <tr> 
        
        <th className="py-2 px-4 border-b"> Process</th>
        <th className="py-2 px-4 border-b">Trigger Details</th>
        <th className="py-2 px-4 border-b">Next Run Time</th>
        <th className="py-2 px-4 border-b">State</th>
        <th className="py-2 px-4 border-b">Error</th>
        <th >

      <button className='mx-8 p-2 rounded-lg border border-gray-300 bg-transparent text-blue-500'> <FontAwesomeIcon  icon={faDownload}/> <span className='ms-1 text-sm'>Export</span></button>
      <button className='p-2 px-4 rounded-lg border border-gray-300 bg-blue-500 text-white'> <FontAwesomeIcon icon={faPlay}/> <span className='ms-1 text-sm'>Start</span></button>
        </th>
      </tr>


    </thead>
    <tbody>
      <tr>
        <td className="py-2 px-4 border-b">Process 1</td>
        <td className="py-2 px-4 border-b">At 7:00Am, only on Monday</td>
        <td className="py-2 px-4 border-b"><FontAwesomeIcon className='text-grey-100' icon={faClockRotateLeft}/> <span className='ms-1'>in 13 hours</span></td>
        <td><FontAwesomeIcon className='text-green-600' icon={faSquareCheck}/> <span>Success</span></td>
        <td>
        <button id="modalTrigger" className=" text-grey-300 font-bold ms-2 py-2 px-4 rounded" onClick={() => modalData()}>
        <FontAwesomeIcon icon={faPowerOff}/>
      </button>
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 border-b">Process 2</td>
        <td className="py-2 px-4 border-b">At 10:00Am, only on Friday</td>
        <td className="py-2 px-4 border-b"><FontAwesomeIcon icon={faClockRotateLeft} /> <span className='ms-1'>in 10 hours</span></td>
        <td><FontAwesomeIcon className='text-red-700' icon={faSquareXmark} /> <span>Failed</span></td>
        <td>
        <button id="modalTrigger2" className=" text-grey-300 font-bold ms-2 py-2 px-4 rounded" onClick={() => modalData()}>
        <FontAwesomeIcon icon={faPowerOff}/>
      </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>


<div className='ms-0 me-36'>
      {/* Pagination buttons */}
      <div className="flex justify-center">
        {/* Previous button */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          className="px-4 py-2 mx-1 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Previous
        </button>

        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={`px-4 py-2 mx-1 ${
              currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            } rounded`}
          >
            {pageNumber}
          </button>
        ))}

        {/* Next button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          className="px-4 py-2 mx-1 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Next
        </button>
      </div>

      {/* TODO: Render your data */}
    </div>



    </div>
  )
}

export default Shared