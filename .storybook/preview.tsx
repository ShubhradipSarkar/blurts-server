/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import type { Preview } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import "../src/app/globals.css";
import { SessionProvider } from "../src/contextProviders/session";
import { L10nProvider } from "../src/contextProviders/localization";
import { metropolis } from "../src/app/fonts/Metropolis/metropolis";
import { ReactAriaI18nProvider } from "../src/contextProviders/react-aria";
import { getEnL10nBundlesSync } from "../src/app/functions/server/mockL10n";
import { PublicEnvProvider } from "../src/contextProviders/public-env";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const AppDecorator: Preview["decorators"] = (storyFn) => {
  const l10nBundles = getEnL10nBundlesSync();

  useEffect(() => {
    // We have to add these classes to the body, rather than simply wrapping the
    // storyFn in a container, because some components (most notably, the ones
    // that use useModalOverlay()) append elements to the end of the body using
    // a React Portal, thus breaking out of a container element.
    document.body.classList.add(inter.className);
    document.body.classList.add(inter.variable);
    document.body.classList.add(metropolis.variable);
  }, []);

  return (
    <L10nProvider bundleSources={l10nBundles}>
      <PublicEnvProvider
        publicEnvs={{
          PUBLIC_APP_ENV: "storybook",
        }}
      >
        <SessionProvider session={null}>
          <ReactAriaI18nProvider locale="en">{storyFn()}</ReactAriaI18nProvider>
        </SessionProvider>
      </PublicEnvProvider>
    </L10nProvider>
  );
};

// Arguments to the `storySort` callback, left as documentation.
type SortData = {
  type: "story";
  id: string;
  name: string;
  title: string;
  importPath: string;
  tags: Array<"story" | string>;
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
    options: {
      // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories
      // @ts-ignore Storybook appears to not parse this as TypeScript, so we can't
      //            add `SortData` type annotations. See
      //            https://github.com/storybookjs/storybook/issues/21702#issuecomment-1517154204
      storySort: (a, b) =>
        a.title.localeCompare(b.title, undefined, { numeric: true }),
    },
    nextjs: {
      // See https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/#nextnavigation
      appDirectory: true,
      navigation: {
        push(path: string, ...otherArgs: unknown[]) {
          action("nextNavigation.push")(path, ...otherArgs);

          if (path === "/redesign/user/dashboard") {
            linkTo(
              "Pages/Dashboard",
              "US user, without Premium, with unresolved scan results, with unresolved breaches",
            )();
          }

          if (
            path ===
            "/redesign/user/dashboard/fix/data-broker-profiles/start-free-scan"
          ) {
            linkTo("Pages/Guided resolution/1a. Free scan")();
          }

          if (
            path ===
            "/redesign/user/dashboard/fix/data-broker-profiles/view-data-brokers"
          ) {
            linkTo(
              "Pages/Guided resolution/1b. Scan results",
              "With a few unresolved scan results (free)",
            )();
          }

          if (
            path ===
            "/redesign/user/dashboard/fix/data-broker-profiles/manual-remove"
          ) {
            linkTo("Pages/Guided resolution/1c. Manually resolve brokers")();
          }

          if (
            path ===
            "/redesign/user/dashboard/fix/data-broker-profiles/automatic-remove"
          ) {
            linkTo(
              "Pages/Guided resolution/1d. Automatically resolve brokers",
            )();
          }

          if (
            path === "/redesign/user/dashboard/fix/high-risk-data-breaches/ssn"
          ) {
            linkTo(
              "Pages/Guided resolution/2. High-risk data breaches",
              "2a. Social Security Number",
            )();
          }

          if (
            path ===
            "/redesign/user/dashboard/fix/high-risk-data-breaches/credit-card"
          ) {
            linkTo(
              "Pages/Guided resolution/2. High-risk data breaches",
              "2b. Credit card",
            )();
          }

          if (
            path ===
            "/redesign/user/dashboard/fix/high-risk-data-breaches/bank-account"
          ) {
            linkTo(
              "Pages/Guided resolution/2. High-risk data breaches",
              "2c. Bank account",
            )();
          }

          if (
            path === "/redesign/user/dashboard/fix/high-risk-data-breaches/pin"
          ) {
            linkTo(
              "Pages/Guided resolution/2. High-risk data breaches",
              "2d. PIN",
            )();
          }

          if (
            path === "/redesign/user/dashboard/fix/high-risk-data-breaches/done"
          ) {
            linkTo(
              "Pages/Guided resolution/2. High-risk data breaches",
              "2e. Done",
            )();
          }

          if (
            path === "/redesign/user/dashboard/fix/leaked-passwords/passwords"
          ) {
            linkTo(
              "Pages/Guided resolution/3. Leaked passwords",
              "3a. Passwords",
            )();
          }

          if (
            path ===
            "/redesign/user/dashboard/fix/leaked-passwords/security-questions"
          ) {
            linkTo(
              "Pages/Guided resolution/3. Leaked passwords",
              "3b. Security questions",
            )();
          }

          if (
            path ===
              "/redesign/user/dashboard/fix/leaked-passwords/passwords-done" ||
            path ===
              "/redesign/user/dashboard/fix/leaked-passwords/security-questions-done"
          ) {
            linkTo("Pages/Guided resolution/3. Leaked passwords", "3c. Done")();
          }

          if (
            path ===
            "/redesign/user/dashboard/fix/security-recommendations/phone"
          ) {
            linkTo(
              "Pages/Guided resolution/4. Security recommendations",
              "4a. Phone number",
            )();
          }

          if (
            path ===
            "/redesign/user/dashboard/fix/security-recommendations/email"
          ) {
            linkTo(
              "Pages/Guided resolution/4. Security recommendations",
              "4b. Email address",
            )();
          }

          if (
            path === "/redesign/user/dashboard/fix/security-recommendations/ip"
          ) {
            linkTo(
              "Pages/Guided resolution/4. Security recommendations",
              "4c. IP address",
            )();
          }

          if (
            path ===
            "/redesign/user/dashboard/fix/security-recommendations/done"
          ) {
            linkTo(
              "Pages/Guided resolution/4. Security recommendations",
              "4d. Done",
            )();
          }
        },
      },
    },
  },
  decorators: [AppDecorator],
};

export default preview;
