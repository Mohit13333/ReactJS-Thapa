const Practise = () => {
  const students = ["mohit","ritesh"];
  return (
    <>
      {/* <p>{students.length&& "No students Found"}</p> */}
      {/* 1st */}
      {/* <p>{students.length===0 && "No students Found"}</p> */}
      {/* 2nd */}
      {/* <p>{!students.length&& "No students Found"}</p> */}
      {/* 3rd */}
      <p>{Boolean(!students.length)&& "No students Found"}</p>
      <p>Number of students:{students.length}</p>
    </>
  );
};

export default Practise;
