import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

type RatingPropsType = {
    ratable: boolean;
    ratingTxt?: string;
    className?: string;
}

export default function BasicRating({ ratable, ratingTxt, className }: RatingPropsType) {
    const [value, setValue] = React.useState<number | null>(5);

    return (
        <div className={`flex flex-col 2xs:flex-row flex-wrap gap-5 ${className}`}>
            {ratable ? <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
                :
                <Rating name="read-only" value={value} readOnly />

            }
            <Typography component="legend">{ratingTxt}</Typography>
        </div>
    );
}

