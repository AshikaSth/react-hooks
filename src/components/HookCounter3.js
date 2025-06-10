import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        {/* <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ firstName: e.target.value })}
        />
        <input type="text" 
        value={name.lastName}
          onChange={(e) => setName({ lastName: e.target.value })}
        />
        <h2>Your firstname is - {name.firstName}</h2>
        <h2>Your lastname is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2> */}
        {/* //we can see that the firstName and lastName are being updated independently one at a time
        //they are not being updated together and is a key difference from setState. setState will merge the state.
        //useState does not merge the state. You have to do it manually.
        //so we can use the spread operator to merge the state */}

        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input type="text" 
        value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>Your firstname is - {name.firstName}</h2>
        <h2>Your lastname is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounter3;
