# Node Disk Storage (NDS)

[![Build Status](https://app.travis-ci.com/restuwahyu13/node-disk-storage.svg?token=TJCjdtb3tZAkAUnGPRjB&branch=main)](https://app.travis-ci.com/restuwahyu13/node-disk-storage) [![Coverage Status](https://coveralls.io/repos/github/restuwahyu13/node-disk-storage/badge.svg?branch=main)](https://coveralls.io/github/restuwahyu13/node-disk-storage?branch=main) [![CodeFactor](https://www.codefactor.io/repository/github/restuwahyu13/node-disk-storage/badge)](https://www.codefactor.io/repository/github/restuwahyu13/node-disk-storage) [![codebeat badge](https://codebeat.co/badges/5611b53e-e00a-40c1-bab2-b9a8f5592b33)](https://codebeat.co/projects/github-com-restuwahyu13-node-disk-storage-main) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/d74af409b71641fb96484df3dc582365)](https://www.codacy.com/gh/restuwahyu13/node-disk-storage/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=restuwahyu13/node-disk-storage&amp;utm_campaign=Badge_Grade)![node-current](https://img.shields.io/node/v/node-disk-storage?style=flat-square) ![npm](https://img.shields.io/npm/dm/node-disk-storage) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/restuwahyu13/node-disk-storage/blob/main/CONTRIBUTING.md)

**node-disk-storage** a simple fast and secure `local storage` for `nodejs`, you can store any data using key and value.

<img src="images/nds-work.png" alt="example-nds-work"/>

- [Node Disk Storage (NDS)](#node-disk-storage-nds)
  - [Installation](#installation)
  - [API Reference](#api-reference)
  - [Example Usage](#example-usage)
  - [Testing](#testing)
  - [Bugs](#bugs)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

```bash
$ npm install node-disk-storage -S or yarn add node-disk-storage -S
```
## API Reference

- #### Node Disk Storage Options Property

  + **minSize** limit data size, before saving into disk, default value to **1MB**
  + **maxSize** limit data size, before saving into disk, default value to **25MB**
  + **compress** compress data using gzip, before saving into disk, default value to false

- #### set(key: string, value: string): boolean | undefined
  set data using key and value, into disk

- #### get(key: string): any | undefined
  get specific data using key, after saving data into disk

- #### remove(key: string): boolean | undefined
  remove specific data already exist using key, after saving data into disk

- #### clear(): boolean | undefined
  clear all keys exist, after saving data into disk

- #### keys(): boolean | undefined
  get all keys exist, after saving data into disk

## Example Usage

- ##### Example Usage Using CommonJs With JavaScript

  ```javascript
   const { NodeDiskStorage } = require('node-disk-storage')

   const nds = new NodeDiskStorage()

   nds.set("name", "joh doe")
   nds.get("name")
   nds.keys()
   nds.remove("name")
   nds.clear()
  ```
- ##### Example Usage Using CommonJs With JavaScript And Options

  ```javascript
   const { NodeDiskStorage } = require('node-disk-storage')

   const nds = new NodeDiskStorage({ minSize: 5, maxSize: 30, compress: true })

   nds.set("name", "joh doe")
   nds.get("name")
   nds.keys()
   nds.remove("name")
   nds.clear()
  ```

- ##### Example Usage Using ESM With JavaScript

  ```javascript
   import { NodeDiskStorage } from 'node-disk-storage'

   const nds = new NodeDiskStorage()

   nds.set("name", "joh doe")
   nds.get("name")
   nds.keys()
   nds.remove("name")
   nds.clear()
  ```

- ##### Example Usage Using ESM With JavaScript And Options

  ```javascript
   import { NodeDiskStorage } from 'node-disk-storage'

   const nds = new NodeDiskStorage({ minSize: 5, maxSize: 30, compress: true })

   nds.set("name", "joh doe")
   nds.get("name")
   nds.keys()
   nds.remove("name")
   nds.clear()
  ```

## Testing

- Testing Via Local

  ```sh
  npm test or make test
  ```

- Testing Via Local And Build

  ```sh
  make build
  ```

- Testing Via Docker

  ```sh
  docker build -t node-disk-storage or make dkb tag=node-disk-storage
  ```

## Bugs

For information on bugs related to package libraries, please visit [here](https://github.com/restuwahyu13/node-disk-storage/issues)

## Contributing

Want to make **node-disk-storage** more perfect ? Let's contribute and follow the [contribution guide.](https://github.com/restuwahyu13/node-disk-storage/blob/main/CONTRIBUTING.md)

## License

- [MIT License](https://github.com/restuwahyu13/node-disk-storage/blob/main/LICENSE.md)

<p align="right" style="padding: 5px; border-radius: 100%; background-color: red; font-size: 2rem;">
  <b><a href="node-disk-storage#node-disk-storage-nds">BACK TO TOP</a></b>
</p>
