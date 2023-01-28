import { Grid } from "@mui/material";
import React from "react";

export default function CategoryBox() {
  return (
    <Grid
      container
      className="bg-[#142629] mb-[20px]"
      style={{
        borderRadius: "5px",
      }}
    >
      <Grid
        xxl={4}
        xl={4}
        lg={4}
        md={4}
        sm={4}
        xs={4}
        className="pro_category"
        //   style={{
        //     backgroundImage: `url("${item?.image}")`,
        //   }}
      />

      <Grid xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
        <Grid container>
          <Grid xxl={9} xl={9} lg={9} md={9} sm={9} xs={9}>
            <div style={{ padding: " 15px 15px" }}>
              <h5
                className="leading-[1.6] text-[20px] text-[600] text-[#eae5dc]"
                style={{
                  fontFamily: "Crimson Text",
                }}
              >
                Juicy Cocktail
              </h5>
              <div
                className="mt-[5px] leading-[1.4] text-[12px] text-[400] text-[#d3cfc6]"
                style={{
                  fontFamily: "'Poppins'",
                }}
              >
                Consectetur adipisicing elit. Soluta, impedit, saepe.
              </div>
            </div>
          </Grid>

          <Grid xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}>
            <div className="flex flex-wrap pt-[22px] mr-[15px]">
              <span className="text-[#d3cfc6] text-[12px] text-[200]">INR</span>
              <span className="text-[#d3cfc6] text-[12px] text-[200]">400.3</span>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
