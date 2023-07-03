import React from 'react'

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
        <th className='mt-10'>

      <button>Export</button><button>Start</button>
        </th>
      </tr>


    </thead>
    <tbody>
      <tr>
        <td class="py-2 px-4 border-b">John Doe</td>
        <td class="py-2 px-4 border-b">john@example.com</td>
        <td class="py-2 px-4 border-b">Admin</td>
      </tr>
      <tr>
        <td class="py-2 px-4 border-b">Jane Smith</td>
        <td class="py-2 px-4 border-b">jane@example.com</td>
        <td class="py-2 px-4 border-b">User</td>
      </tr>
    </tbody>
  </table>
</div>


    </div>
  )
}

export default Shared