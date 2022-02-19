import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MuiAppBar from "../../components/mui-Appbar/MuiAppBar";
import BasicTable from "../../components/table/Table";
import { useForm } from "react-hook-form";
import {
  featuredHeaders,
  movieListStreamDBHeaders,
} from "../../constant/constant";
import {
  addFeaturedList,
  addMovieToStreamDB,
  deleteFeaturedList,
  deleteMovieFromStreamDB,
  getFeaturedData,
  getMovieListStreamDB,
  moveToDb,
  updateMovieInStreamDB,
} from "../../service/api";

const AdminDashboard = () => {
  const [featuredData, setFeaturedData] = useState([{}]);
  const [movieListStream, setMovieListStream] = useState([{}]);
  const [streamSbData, setStreamSbData] = useState({
    id: "",
    url: "",
    imdbid: "",
    movie_name: "",
  });
  //StreamDB modal
  const [open, setOpen] = useState(false);

  const fetchFeaturedData = async () => {
    const res1 = await getMovieListStreamDB();
    const res = await getFeaturedData();
    setMovieListStream(res1.data.results);
    setFeaturedData(res.data);
  };

  useEffect(() => {
    fetchFeaturedData();
  }, []);

  const handleMoveToDb = async () => {
    const res = await moveToDb();
    console.log(res);
  };

  const handleFeatureDelete = async (data: any) => {
    const { id, type } = data;
    const res = await deleteFeaturedList({ id, type });
    console.log(res);
  };

  //Add Feature Data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitAddFeatureData = async (data: any) => {
    console.log(data);
    console.log(errors, "ee");
    const res = await addFeaturedList(data);
    console.log(res);
  };

  //Add StreamSB Data
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    mode: "onBlur",
  });

  //edit StreamDB data
  const {
    register: register3,
    handleSubmit: handleSubmit3,
    formState: { errors: errors3 },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmitHandleStreamSBAdd = async (data: any) => {
    console.log(data);
    console.log(errors2, "ee");
    const res = await addMovieToStreamDB(data);
    console.log(res);
  };

  //Edit Stream SB Data Modal
  const handleEditStreamSb = (data: any, event: any) => {
    setStreamSbData(data);
    setOpen(true);
    console.log("setStreamSbData", streamSbData);
  };

  //Delete Stream SB Data
  const handleDeleteStreamSb = async (data: any) => {
    console.log("delete", streamSbData);
    const res = await deleteMovieFromStreamDB({ id: streamSbData?.id });
    setOpen(false);
    console.log(res);
  };

  const handleEdit = async (data: any) => {
    console.log(data, "data");
    const res = await updateMovieInStreamDB(data);
    console.log(res, "res");
    setOpen(false);
  };
  return (
    <div>
      <MuiAppBar />
      <BasicTable
        handleChange={handleFeatureDelete}
        buttonName="Delete"
        rows={featuredData}
        headers={featuredHeaders}
        title={"Featured Data"}
      />

      <form onSubmit={handleSubmit(onSubmitAddFeatureData)}>
        <input
          type="text"
          placeholder="imdbId"
          {...register("imdbId", { required: true })}
        />
        <input
          {...register("type", { required: true })}
          type="radio"
          value="tv"
        />
        TV
        <input
          {...register("type", { required: true })}
          type="radio"
          value="movie"
        />
        Movie
        <input type="submit" />
      </form>

      <BasicTable
        handleChange={handleEditStreamSb}
        rows={movieListStream}
        headers={movieListStreamDBHeaders}
        title={"Movies from Stream SB"}
      />

      <form onSubmit={handleSubmit2(onSubmitHandleStreamSBAdd)}>
        <input
          type="text"
          placeholder="url"
          {...register2("url", { required: true })}
        />
        <input
          type="text"
          placeholder="imdbid"
          {...register2("imdbid", { required: true })}
        />
        <input
          type="text"
          placeholder="movie_name"
          {...register2("movie_name", { required: true })}
        />
        <input type="submit" />
      </form>
      <Button onClick={handleMoveToDb}>MOVE TO DB</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "#fff",
            border: "2px solid #000",
            padding: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update/ Delete StreamSb data
          </Typography>
          <form onSubmit={handleSubmit3(handleEdit)}>
            <input
              type="text"
              defaultValue={streamSbData.id}
              placeholder="id"
              {...register3("id", { required: true })}
            />
            <input
              type="text"
              defaultValue={streamSbData.imdbid}
              placeholder="imdbid"
              {...register3("imdbid", { required: true })}
            />
            <input
              type="text"
              defaultValue={streamSbData.url}
              placeholder="url"
              {...register3("url", { required: true })}
            />
            <input
              type="text"
              defaultValue={streamSbData.movie_name}
              placeholder="movie_name"
              {...register3("movie_name", { required: true })}
            />
            <input type="submit" />
          </form>
          <Button onClick={handleDeleteStreamSb}>Delete</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
