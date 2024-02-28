"use client";

import { BillboardColumn } from "./columns";

interface BillboardProps {
  data: BillboardColumn;
}

export const CellAction: React.FC<BillboardProps> = ({ data }) => {
  return <div>Action</div>;
};
