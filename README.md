# Node Disk Storage

[![Build Status](https://travis-ci.com/restuwahyu13/node-disk-storage.svg?branch=main)](https://travis-ci.com/restuwahyu13/node-disk-storage)

**nds** a simple fast and secure `local storage` for `nodejs`, you can store any data using key and value.

- [Node Disk Storage](#node-disk-storage)
  - [Installation](#installation)
  - [API Reference](#api-reference)
  - [How It Works](#how-it-works)
  - [Example Usage](#example-usage)
  - [Testing](#testing)
  - [Bugs](#bugs)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

```bash
$ npm install nds -S or yarn add nds -S
```
## API Reference

- #### NDS Options Property

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

## How It Works

<img src="images/nds-work.png" alt="example-nds-work"/>

## Example Usage

- ##### Example Usage Using CommonJs With JavaScript

  ```javascript
   const { NodeDiskStorage } = require('nds')

   const nds = new NodeDiskStorage()

   nds.set("name", "joh doe")
   nds.get("name")
   nds.keys()
   nds.remove("name")
   nds.clear()
  ```
- ##### Example Usage Using CommonJs With JavaScript And Options

  ```javascript
   const { NodeDiskStorage } = require('nds')

   const nds = new NodeDiskStorage({ minSize: 5, maxSize: 30, compress: true })

   nds.set("name", "joh doe")
   nds.get("name")
   nds.keys()
   nds.remove("name")
   nds.clear()
  ```

- ##### Example Usage Using ESM With JavaScript

  ```javascript
   import { NodeDiskStorage } from 'nds'

   const nds = new NodeDiskStorage()

   nds.set("name", "joh doe")
   nds.get("name")
   nds.keys()
   nds.remove("name")
   nds.clear()
  ```

- ##### Example Usage Using ESM With JavaScript And Options

  ```javascript
   import { NodeDiskStorage } from 'nds'

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
  <b><a href="#node-disk-storage">BACK TO TOP</a></b>
</p>
