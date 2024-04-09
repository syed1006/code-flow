import React from 'react';
import WorkflowButton from './_components/workflow-button';

type Props = {};

const page = (props: Props) => {
    return (
        <div className="relative flex flex-col gap-4">
            <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
                Workflows
            </h1>
            <WorkflowButton />
        </div>
    );
};

export default page;
