import React, { ReactNode } from "react";

type TableProps = {
  data: Record<string, ReactNode>[] | ReactNode[][];
};
const Table = ({ data }: TableProps) => {
  const hasHeaders = data.every(Array.isArray);

  if (hasHeaders && data.some(Array.isArray)) {
    console.log("Invalid table data", data);
    return null;
  }

  const headers = hasHeaders ? null : Object.keys(data[0]);
  const values = hasHeaders ? data : data.map(Object.values);

  return (
    <table>
      {headers && (
        <tr className="border-b border-slate-500/[.2] capitalize">
          {headers.map((content) => (
            <th className="text-center pb-4">{content}</th>
          ))}
        </tr>
      )}
      {values.map((row) => (
        <tr className="odd:bg-slate-500/[.03]">
          {row &&
            row.map((content) => (
              <td className="p-4">
                <div className="flex gap-4 items-center justify-center">
                  {content}
                </div>
              </td>
            ))}
        </tr>
      ))}
    </table>
  );
};

export default Table;
