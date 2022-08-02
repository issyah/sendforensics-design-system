/**
 * Custom loader for Static image html export
 **/ 

import NextImage from "next/image";


const customLoader = ({src}) => {
  return src;
}


export default function Image(props) {
  const {newProps, layout} = props;
  return (
    <NextImage
      {...props}
      layout={layout}
      loader={customLoader}
      unoptimized
    />
  )
}