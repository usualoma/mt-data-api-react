<h1>Entries</h1>
<ul className="list-unstyled">
  <MT.Entries>
    <li id={<MT.EntryId />} className="media mt-3 border-bottom">
      <MT.EntryAssets limit="1">
        <img src={<MT.AssetThumbnailUrl width="150" />} className="mr-3" />
      </MT.EntryAssets>
      <div className="media-body">
        <a href={<MT.EntryPermalink />} className="text-body">
          <h5 className="mt-0 mb-1">
            <MT.EntryTitle/>
          </h5>
        </a>
        <div className="text-secondary small">
          <span className="mr-3">
            <MT.EntryDate format="%Y.%m.%d" />
          </span>
          <span className="mr-3">
            <MT.EntryAuthorDisplayName />
          </span>
        </div>
        <p>
          <MT.EntryExcerpt />
        </p>
      </div>
    </li>
  </MT.Entries>
</ul>
