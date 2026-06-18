import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
    Card, CardContent, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/card'

import { Field, FieldDescription, FieldGroup, FieldSet } from '@/components/ui/field';

export const metadata: Metadata = {
    title: "Sign in",
    description: "Sign in to AI PR Code Reviewer with your GitHub account.",
};


type SignInPageProps = {
    searchParams: Promise<{
        callbackUrl?: string;
    }>;
}
const SignInPage = ({ searchParams }: SignInPageProps) => {
    return (
        <Card className="border-border/80 shadow-sm">
            <CardHeader className="items-center text-center">
                <div className="mb-6 flex justify-center pt-2">
                    <Image
                        src="/logo2.png"
                        alt="Chai AI Code Reviewer"
                        width={172}
                        height={172}
                        priority
                        className="text-foreground"
                    />
                </div>
                <CardTitle className="text-base">Welcome back</CardTitle>
                <CardDescription>
                    Sign in with GitHub to review and manage your code.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <FieldSet>
                    <FieldGroup>
                        <Field>
                            {/* <GithubSignInForm callbackUrl={callbackUrl} /> */}
                            <FieldDescription className="text-center">
                                We only request the permissions needed to identify your
                                account. You can revoke access anytime from GitHub settings.
                            </FieldDescription>
                        </Field>
                    </FieldGroup>
                </FieldSet>
            </CardContent>
        </Card>
    )
}

export default SignInPage