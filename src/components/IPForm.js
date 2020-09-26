import React from 'react';

const IPForm = ({searchInput, setSearchInput, getIPs}) => {

    const inputTextHandler = (e) => {
        setSearchInput(e.target.value);
    };

    const submitSearchHandler = (e) => {
        e.preventDefault();
        getIPs();
    }

    return (
        <form>
            <input
            value={searchInput}
            onChange={inputTextHandler}
            type="text"
            placeholder="Search for any IP address or domain"
            />
            <button
            type="submit"
            onClick={submitSearchHandler}>
              <img src={process.env.PUBLIC_URL+"/images/icon-arrow.svg"} />
            </button>
          </form>
      );
}

export default IPForm;