import React from "react";
import { TbMailPlus, TbMailDown, TbMailUp } from "react-icons/tb";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { Link, Router } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="w-2/12 ">
        <ul className="w-full flex-row p-2  ">
          <Link to="/new">
            <li className="p-2 w-full shadow-md bg-rose-50  text-orange-900 grid grid-flow-col-dense  hover:bg-rose-300  hover:scale-110">
              <TbMailPlus className=" text-2xl " />
              <i >New email</i>

            </li>
          </Link>
          <Link to='/to'>
            <li className="p-2 w-full mt-2 shadow-md bg-rose-50 text-orange-900 grid grid-flow-col-dense  hover:bg-rose-300  hover:scale-110">
              <TbMailDown className="inline text-2xl " />
              <i >Inbox </i>
            </li>
          </Link>
          <Link to='/from'>
            <li className="p-2  w-full mt-2 shadow-md bg-rose-50 text-orange-900 grid grid-flow-col-dense hover:bg-rose-300  hover:scale-110">
              <TbMailUp className="inline text-2xl " />
              <i>Outbox</i>
            </li>
          </Link>
          <Link to='/unread'>
            <li className="p-2 w-full mt-2 shadow-md bg-rose-50 text-orange-900 grid grid-flow-col-dense hover:bg-rose-300  hover:scale-110 ">

              <MdOutlineMarkEmailUnread className="inline text-2xl " />
              <i>unread</i>

            </li>
          </Link>
          <Link to='/trash'>
            <li className="p-2 mt-2 w-full  shadow-md bg-rose-50 text-orange-900 grid grid-flow-col-dense hover:bg-rose-300  hover:scale-110">
              <IoTrashOutline className="inline text-2xl " />
              <i>Garbage </i>

            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
