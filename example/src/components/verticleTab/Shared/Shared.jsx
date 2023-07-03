import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlay, faSquareCheck, faSquareXmark, faPowerOff, faClock , faClockFour, faClockRotateLeft} from '@fortawesome/free-solid-svg-icons';

const Shared = () => {
  return (
    <div>
      <div class="w-full">
  <table class="min-w-full bg-white">
    <thead>
      <tr> 
        
        <th class="py-2 px-4 border-b"> Process</th>
        <th class="py-2 px-4 border-b">Trigger Details</th>
        <th class="py-2 px-4 border-b">Next Run Time</th>
        <th class="py-2 px-4 border-b">State</th>
        <th class="py-2 px-4 border-b">Error</th>
        <th >

      <button className='mx-8 p-2 rounded-lg border border-gray-300 bg-transparent text-blue-500'> <FontAwesomeIcon className='ml-2' icon={faDownload}/> <span className='ms-1 text-sm'>Export</span></button>
      <button className='p-2 px-4 rounded-lg border border-gray-300 bg-blue-500 text-white'> <FontAwesomeIcon icon={faPlay}/> <span className='ms-1 text-sm'>Start</span></button>
        </th>
      </tr>


    </thead>
    <tbody>
      <tr>
        <td class="py-2 px-4 border-b">Process 1</td>
        <td class="py-2 px-4 border-b">At 7:00Am, only on Monday</td>
        <td class="py-2 px-4 border-b"><FontAwesomeIcon className='text-grey-100' icon={faClockRotateLeft}/> <span className='ms-1'>in 13 hours</span></td>
        <td><FontAwesomeIcon className='text-green-600' icon={faSquareCheck}/> <span>Success</span></td>
      </tr>
      <tr>
        <td class="py-2 px-4 border-b">Procss 2</td>
        <td class="py-2 px-4 border-b">At 7:00Am, only on Monday</td>
        <td class="py-2 px-4 border-b"><FontAwesomeIcon icon={faClockRotateLeft} /> <span className='ms-1'>in 13 hours</span></td>
        <td><FontAwesomeIcon className='text-red-700' icon={faSquareXmark} /> <span>Failed</span></td>
      </tr>
    </tbody>
  </table>
</div>


    </div>
  )
}

export default Shared