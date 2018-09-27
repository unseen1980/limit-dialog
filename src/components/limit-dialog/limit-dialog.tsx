import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'limit-dialog',
  styleUrl: 'limit-dialog.scss',
  shadow: true
})
export class LimitDialog {

  @Prop() header: string;
  @Prop() description: string;
  @Prop() list: string;
  @Prop() image: string;
  @Prop() redirectUrl: string;
  @Prop() open: boolean;

  componentWillLoad() {
    console.log('Component is about to be rendered', JSON.parse(this.list));
  }

  redirect() {
    if (this.redirectUrl) {
      window.open(this.redirectUrl, '_self');
    }
    else {
      window.open('http://www.build.me', '_self');
    }
  }

  render() {
    if (this.open) {
      return (
        <div id="limitDialog" class="modal-open">
          <div class="backdrop"></div>
          <div class="modal">
            <div class="modal-window">
              <div class="modal-content">
                <div class="modal-icon">
                  {
                    this.image
                      ? <img src={this.image} />
                      : <img src="../../assets/limit-prototype.svg" />
                  }
                </div>
                <div class="modal-header">{this.header}</div>
                <span class="modal-description">{this.description}</span>
                <ul>
                  {
                    JSON.parse(this.list).map(element => {
                      return <li>{element.item}</li>
                    })
                  }
                </ul>
              </div>
              <div class="modal-actions">
                <div class="close-action">
                  <button onClick={this.redirect.bind(this)}>OKAY</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
