<h1>Entries</h1>
<div class="row">
  <MT.Entries limit="4">
    <div class="col-6">
      <div id={<MT.EntryId />} class="card mt-3">
        <MT.EntryAssets limit="1">
          <img src={<MT.AssetThumbnailUrl />} class="card-img-top" />
        </MT.EntryAssets>
        <div class="card-body">
          <a href={<MT.EntryPermalink />} className="text-body">
            <h5 class="card-title">
              <MT.EntryTitle />
            </h5>
          </a>
          <p class="card-text">
            <MT.EntryExcerpt />
          </p>
        </div>
      </div>
    </div>
  </MT.Entries>
</div>
