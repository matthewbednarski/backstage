/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { PackageRole } from '@backstage/cli-node';
import { resolve as resolvePath } from 'path';
import { Project } from 'ts-morph';
import { EntryPoint } from '../entryPoints';
import {
  getDistTypeRoot,
  BackstagePackageFeatureType,
} from '../typeDistProject';

const mockEntryPoint = {
  mount: '.',
  path: './src/index.d.ts',
  name: 'index',
  ext: '.d.ts',
};

type CreateFeatureEnvironmentOptions = {
  $$type?: BackstagePackageFeatureType;
  format?:
    | 'DefaultExportAssignment'
    | 'DefaultExportFromFile'
    | 'DefaultExportFromFileAsDefault'
    | 'DefaultExportFromFileWithSibling';
  role?: PackageRole;
};

type FeatureEnvironment = {
  project: Project;
  role: PackageRole;
  dir: string;
  entryPoint: EntryPoint;
};

type File = {
  path: string;
  content: string;
};

const createTestType = ($$type: BackstagePackageFeatureType): File[] => [
  {
    path: './src/createTestType.d.ts',
    content: `
export interface TestType {
  readonly $$type: '${$$type}';
};

export function createTestType(): TestType {
  return {
    $$type: '${$$type}',
  };
};
  `,
  },
];

const createMockDefaultExportAssignment = (): File[] => [
  {
    path: mockEntryPoint.path,
    content: `
declare const _default: import("./createTestType").TestType;
export default _default;
    `,
  },
];

const createMockDefaultExportFromFile = (): File[] => [
  {
    path: mockEntryPoint.path,
    content: `export { default } from './linked';`,
  },
  {
    path: './src/linked.d.ts',
    content: `
declare const _default: import("./createTestType").TestType;
export default _default;    
`,
  },
];

const createMockDefaultExportFromFileAsDefault = (): File[] => [
  {
    path: mockEntryPoint.path,
    content: `export { test as default } from './linked';`,
  },
  {
    path: './src/linked.d.ts',
    content: `
export declare const test: import("./createTestType").TestType; 
  `,
  },
];

const createMockDefaultExportFromFileWithSibling = (): File[] => [
  {
    path: mockEntryPoint.path,
    content: `export { default, test } from './linked';`,
  },
  {
    path: './src/linked.d.ts',
    content: `
import { createTestType } from './createTestType';

export declare const test: import("./createTestType").TestType;
declare const _default: import("./createTestType").TestType;
export default _default;    
  `,
  },
];

const formatToFiles = {
  DefaultExportAssignment: createMockDefaultExportAssignment,
  DefaultExportFromFile: createMockDefaultExportFromFile,
  DefaultExportFromFileAsDefault: createMockDefaultExportFromFileAsDefault,
  DefaultExportFromFileWithSibling: createMockDefaultExportFromFileWithSibling,
};

export default function createFeatureEnvironment(
  options?: CreateFeatureEnvironmentOptions,
): FeatureEnvironment {
  const {
    $$type = '@backstage/BackendFeature',
    format = 'DefaultExportAssignment',
    role = 'backend-plugin',
  } = options ?? {};

  const project = new Project();
  const files = [...createTestType($$type), ...formatToFiles[format]()];

  for (const file of files) {
    project.createSourceFile(
      resolvePath(getDistTypeRoot(''), file.path),
      file.content,
    );
  }

  return {
    project,
    role,
    dir: project.getFileSystem().getCurrentDirectory(),
    entryPoint: mockEntryPoint,
  };
}
