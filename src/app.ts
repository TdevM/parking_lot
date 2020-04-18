import {processLineByLine} from './fileHelpers'

processLineByLine(`../${process.argv.slice(2)}`).catch((e) => {
    console.log(e)
})
