import axios from "axios";
import React, {useState, useEffect} from "react";
import MT from "../MT";

const Handler = ({asset, width, height, render}) => {
  const [thumb, setThumbnail] = useState(null);

  useEffect(
    () => {
      const c = { apiUrl: MT.apiUrl };
      axios(`${c.apiUrl}/assets/${asset.id}/thumbnail?width=${width}`).then(({ data }) => {
        setThumbnail(data);
      });
    },
    [asset.id, width, height]
  );

  return thumb ? (render ? render(thumb.url) : thumb.url) : null;
};

class MTAssetThumbnailUrl extends MT.Component {
  render() {
    return (
      <MT.AssetContext.Consumer>{({asset}) => (<Handler asset={asset} {...this.props} />)}</MT.AssetContext.Consumer>
    )
  }
}

MT.AssetThumbnailUrl = MTAssetThumbnailUrl;

export default MTAssetThumbnailUrl;
