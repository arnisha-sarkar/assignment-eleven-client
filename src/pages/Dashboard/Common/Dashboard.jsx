import React from "react";
import { BsCartCheck, BsTruck, BsGraphUp, BsPeople } from "react-icons/bs";
import { GiSewingMachine } from "react-icons/gi"; // Garments icon

const Dashboard = () => {
  // ডামি ডেটা (আপনি API থেকে আনবেন)
  const stats = [
    {
      id: 1,
      label: "Total Orders",
      value: "1,250",
      icon: BsCartCheck,
      color: "bg-blue-500",
    },
    {
      id: 2,
      label: "Production Today",
      value: "4,500 pcs",
      icon: GiSewingMachine,
      color: "bg-green-500",
    },
    {
      id: 3,
      label: "Pending Shipment",
      value: "12",
      icon: BsTruck,
      color: "bg-orange-500",
    },
    {
      id: 4,
      label: "Active Workers",
      value: "320",
      icon: BsPeople,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 dark:bg-[#101828] min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-[#F5F2EE] mb-6">
        Garments Dashboard Overview
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between border-b-4 border-transparent hover:border-blue-400 transition-all"
          >
            <div>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            </div>
            <div className={`${stat.color} p-3 rounded-lg text-white`}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Recent Production Orders
            </h3>
            <button className="text-blue-600 hover:underline text-sm font-medium">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b text-gray-400 uppercase text-xs">
                  <th className="py-3 px-2">Order ID</th>
                  <th className="py-3 px-2">Client Name</th>
                  <th className="py-3 px-2">Item</th>
                  <th className="py-3 px-2">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-2 font-medium">#ORD-992</td>
                  <td className="py-3 px-2">H&M Global</td>
                  <td className="py-3 px-2">Cotton T-Shirt</td>
                  <td className="py-3 px-2 font-semibold text-green-500">
                    Processing
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-2 font-medium">#ORD-845</td>
                  <td className="py-3 px-2">Zara Retail</td>
                  <td className="py-3 px-2">Denim Jacket</td>
                  <td className="py-3 px-2 font-semibold text-orange-500">
                    Pending
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Insights/Actions */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Quick Insights
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
              <BsGraphUp className="text-blue-600" size={20} />
              <div>
                <p className="text-sm font-bold">Efficiency +12%</p>
                <p className="text-xs text-gray-500">
                  Production is higher than last week.
                </p>
              </div>
            </div>
            {/* Add More Insights */}
            <div className="mt-6">
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition shadow-lg">
                Add New Production Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
