export const Table = () => {
  return (
    <div className="w-full bg-secondary text-white shadow-lg rounded-sm">
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-200 bg-secondary">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Nombre</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Fecha Inicio</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Fecha Fin</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Estado</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Creador</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <p className="font-medium text-white">subscripción gratis</p>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <p className="text-center">{new Date().toDateString()}</p>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <p className="text-center font-medium text-white">
                    {new Date().toDateString()}
                  </p>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-center">Activo</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-center">Fernando</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
