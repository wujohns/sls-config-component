/**
 * component
 *
 * @author wujohns
 * @date 20/05/09
 */
const { Component } = require('@serverless/core')

class SlsConfig extends Component {
  async deploy (inputs = {}) {
    const outputs = inputs
    await this.save()
    return outputs
  }

  async remove (inputs = {}) {
    this.state = {}
  }
}

module.exports = SlsConfig
