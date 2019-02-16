import React from "react";
import MT from "./MT";
import "./MT/Tags";

const IndexTemplate = (
  <>
    <h1>Index</h1>
    <ul className="list-unstyled">
      <MT.Entries>
        <li id={(<MT.EntryId />)} className="media">
          <MT.EntryAssets limit="1">
            <img src={<MT.AssetThumbnailUrl width="200" />} />
          </MT.EntryAssets>
          <div className="media-body">
            <a href={(<MT.EntryPermalink />)} className="text-body">
              <h5 className="mt-0 mb-1">{(<MT.EntryTitle />)}</h5>
            </a>
            <p><MT.EntryExcerpt/></p>
          </div>
        </li>
      </MT.Entries>
    </ul>
  </>
);

export default IndexTemplate;
