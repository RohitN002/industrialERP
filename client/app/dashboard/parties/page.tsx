const PartiesPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="text-xl font-medium">Parties</h1>
        <div className="flex gap-4">
          <button>Reports</button>
          <button>Settings</button>
          <button>Keyboard shortcuts</button>
          <button></button>
        </div>
      </div>

      <div className="flex item justify-between mt-2-center gap-4">
        <div className="border px-4 py-2 rounded-lg">
          <span>All parties</span> <span>10</span>
        </div>
        <div className="border px-4 py-2 rounded-lg">
          <span>To collect </span> <span>10</span>
        </div>
        <div className="border px-4 py-2 rounded-lg">
          <span>To pay </span> <span>10</span>
        </div>
      </div>
      <div className="flex justify-between px-4 py-2 rounded-lg">
        <div>Search</div>
        <div>
          <button>Bulk action </button>
          <button>+ Add parties</button>
        </div>
      </div>
    </div>
  );
};

export default PartiesPage;
