import Box from "@mui/material/Box";
import React from "react";
import { FiHeart } from 'react-icons/fi';
import { RxCross2 } from "react-icons/rx";
import { BaseModal } from "./tab";

export default function ViewDiscription({
  filteredData,
  setShowModal,
  showModal,
  //   isLoading,
}) {
  //modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    background: "#142629",
    padding: "0px 20px",
    borderRadius: "10px",
    width: "296px",
  };

  return (
    <section>
       <BaseModal
        shown={true}
        // close={() => setShowModal(false)}
        modalShown={showModal}
      >
        
        <Box sx={style}>
          <div className="flex flex-col w-full h-full bg-[#142629]">
            {/* {filteredData?.map((item, index) => ( */}
            <div className="h-full relative">
              <div
                className="flex absolute justify-center items-center w-full"
                style={{ top: "-46px" }}
              >
                <div
                  className="circle-icon"
                  onClick={() => setShowModal(false)}
                >
                  <RxCross2 size={22} color="#ffff" />
                </div>
              </div>

              <div className="pro_model">
                <div
                  className="pro_img_model"
                  //   style={{
                  //     backgroundImage: `url("${item?.image}")`,
                  //   }}
                />
              </div>
              <div className="flex justify-between">
                <h3
                  className="text-[500] text-[20px] text-[#eae5dc]"
                  style={{ fontFamily: "Crimson Text" }}
                >
                  5 cheela + Sweet chaas
                </h3>
                <span className="mt-[8px]"><FiHeart color="#eae5dc" size={18}/></span>
              </div>

              <p className="text-[15px] text-[#d3cfc6] leading-[20px] mt-[10px] mb-[20px]" style={{
                fontFamily: 'Poppins',
              }} >
              Quaerat debitis, vel, sapiente dicta sequilabore porro pariatur harum expedita.
              </p>
            </div>
            {/* ))} */}
          </div>
        </Box>
      </BaseModal>
    </section>
  );
}
