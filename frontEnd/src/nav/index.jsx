import React from "react";
import { TbMailPlus, TbMailDown, TbMailUp } from "react-icons/tb";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { Link, Router } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav>
        <ul className="flex-row p-1 w-44 ">
          <Link to="/new">
            <li className="p-2  shadow-md bg-rose-50  text-orange-900 flex justify-center ">
              
                <TbMailPlus className=" text-2xl " />
              <i  >New email </i>
              
            </li> 
            </Link>
            
            <li className="p-2 shadow-md bg-rose-50 text-orange-900 flex justify-center">
              <Link  to='/to'>
                <TbMailDown className="inline grow-0 text-2xl " />
              <i className="grow">Inbox </i>
              </Link>
            </li>
            
            <li className="p-2 shadow-md bg-rose-50 text-orange-900 flex justify-center">
            <Link  to='/from'>
              <TbMailUp className="inline text-2xl " />
              <i>Outbox</i>
              </Link>
            </li>

            <li className="p-2  shadow-md bg-rose-50 text-orange-900 flex justify-center">
            <Link  to='/unread'>
              <MdOutlineMarkEmailUnread className="inline text-2xl " />
              <i>unread</i>
              </Link>
            </li>

            <li className="p-2 shadow-md bg-rose-50 text-orange-900 flex justify-center">
            <Link  to='/trash'>
              <IoTrashOutline className="inline text-2xl " />
              <i>Garbage </i>
              </Link>
            </li>
          
        </ul>
      </nav>
    </>
  );
}
