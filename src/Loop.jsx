function Loop({ data }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-72 
                    border border-gray-200 
                    hover:shadow-2xl hover:scale-105 
                    transition-all duration-300">

      <h2 className="text-xl font-bold text-blue-600 mb-3">
        {data.name}
      </h2>

      <p className="text-gray-700">
        <span className="font-semibold">Age:</span> {data.age}
      </p>

      <p className="text-gray-700">
        <span className="font-semibold">Email:</span> {data.email}
      </p>

    </div>
  );
}

export default Loop;



