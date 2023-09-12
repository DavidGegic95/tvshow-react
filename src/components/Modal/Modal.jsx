import * as React from "react";
import { useState, useContext } from "react";
import { applicationContext } from "../../context";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./modal.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "#242424",
  color: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ show }) {
  const { setSingleMovie } = useContext(applicationContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const navigate = useNavigate();
  const imgOnClick = (show) => {
    setSingleMovie(show);
    navigate("/singleshow");
  };
  const movieGenre = (genre1, genre2) => {
    if (genre1 && genre2) {
      return `${genre1} · ${genre2}`;
    } else if (genre1) {
      return `${genre1}`;
    } else if (genre2) {
      return `${genre2}`;
    }
  };

  return (
    <div className="infoDiv">
      <button className="infoButton" onClick={handleOpen}>
        i
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="imageTextDivModal">
              <img className="imgModal" src={show?.image?.medium} alt="" />
              <div className="tittleRatingsGenreModalDiv">
                <p className="modalTitle">
                  {show?.name}
                  <ArrowForwardIosIcon
                    onClick={() => imgOnClick(show)}
                    className="arrowForwardIosIcon"
                  />{" "}
                </p>
                <p className="ratingsModal">
                  <StarIcon className="starIcon" />
                  {show?.rating?.average}/10
                </p>
                <p>{movieGenre(show?.genres[0], show?.genres[1])}</p>
              </div>
            </div>
            <div className="summaryDiv">
              <p
                className={moreInfo ? "summaryModal" : "summaryModal cut-text"}
              >
                {show.summary
                  .replace(/<\/?b[^>]*>/g, "")
                  .replace(/<\/?i[^>]*>/g, "")
                  .replace(/<\/?p[^>]*>/g, "")}
              </p>
              <button
                onClick={() => setMoreInfo((prev) => !prev)}
                className="summaryButtonMoreInfo"
              >
                {moreInfo ? "less info" : "more info"}
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
