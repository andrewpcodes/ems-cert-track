import React from 'react';

type ViewProgressProps = {
    totalHours: number
}

const ViewProgress = ({totalHours }: ViewProgressProps) => {

    return(
        <>
            <div>{`${totalHours} `}hours / 40 hours</div>
        </>
    );
}

export default ViewProgress ;