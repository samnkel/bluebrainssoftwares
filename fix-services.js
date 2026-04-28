const fs = require('fs');
const p = 'c:/Users/Samnkelisiwe/bluebrainssoftwares/front-end/src/views/ServicesView.vue';
let c = fs.readFileSync(p, 'utf8');

// Fix 1: services-grid / container
c = c.replace(
  '          </div>\n      </div>\n    </section>\n\n    <section class="process-section">',
  '          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class="process-section">'
);

// Fix 2: process-grid / container
c = c.replace(
  '          <div class="process-step"><span class="num">06</span><h3>Launch</h3><p>Deploy, monitor, and iterate.</p></div>\n      </div>\n    </section>',
  '          <div class="process-step"><span class="num">06</span><h3>Launch</h3><p>Deploy, monitor, and iterate.</p></div>\n        </div>\n      </div>\n    </section>'
);

// Fix 3: cta-box / container
c = c.replace(
  '          <RouterLink to="/contact" class="btn-primary">Start Your Project</RouterLink>\n        </div>\n    </section>',
  '          <RouterLink to="/contact" class="btn-primary">Start Your Project</RouterLink>\n        </div>\n      </div>\n    </section>'
);

fs.writeFileSync(p, c, 'utf8');
console.log('ServicesView fixed!');
