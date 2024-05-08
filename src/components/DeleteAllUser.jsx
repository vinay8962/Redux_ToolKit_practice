import React from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../store/slices/UserSlice";

export const DeleteAllUser = () => {
  const dispatch =  useDispatch()
  const deleteAllData = () => {
    // alert("he")
     dispatch(clearUser())
  }
  return <div>
    <button className="btn btn-delete" onClick={deleteAllData}> DeleteAllUser</button>
   
    
    </div>;
};
