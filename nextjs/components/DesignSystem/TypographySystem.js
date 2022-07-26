
import { Typography } from "@mui/material"
export default function TypographySystem(){
  const typography_variant = {
    h1: 'Heading 1',
    h2: 'Heading 2',
    h3: 'Heading 3',
    h4: 'Heading 4',
    h5: 'Heading 5',
    h6: 'Heading 6',
    subtitle1: 'Subtitle 1',
    subtitle2: 'Subtitle 2',
    body1: 'Body 1',
    body2: 'Bdoy 2'
  }

  return (
    <div>

      {Object.keys(typography_variant).map((item) =>
        <Typography
          variant={item}
          key={item}
        >
          {typography_variant[item]}
        </Typography>
      )}
    </div>

  )
}