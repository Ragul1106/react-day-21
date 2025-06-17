import React from "react";
import Task1and2 from "./Task1and2";
import Task6 from "./Task6";
import Task8 from "./Task8";
import Task9 from "./Task9";
import Task10 from "./Task10";

function Task() {
  return (
    <>
      <Task1and2 />
      <hr />
      <br />
      <Task6 />
      <hr />
      <br />
       <div className="container text-center mt-3">
        <h4>Task 7: Show Redux DevTools
Inspect actions and state changes using Chrome Redux DevTools.</h4>
       </div>
       <hr />
      <br />
      <Task8 />
      <hr />
      <br />
      <Task9 />
      <hr />
      <br />
      <Task10 />
      <hr />
      <br />
      <div className="container text-center mt-3">
        <h4>Task 11: Separate Slice File Structure
Move actions, reducers, and selectors into a cleaner structure (folder-based modules).</h4>
       </div>
       <hr />
      <br />
      <div className="container text-center mt-3">
        <h4>Task 12: Combine Reducers Manually create a store that combines counter and theme slices.</h4>
       </div>
       <hr />
      <br />
      <div className="container text-center mt-3">
        <h4>Task 13: Unit Test a Slice
Write basic unit tests for a slice (e.g., test if increment increases count).</h4>
       </div>
       <hr />
    </>
  );
}

export default Task;
