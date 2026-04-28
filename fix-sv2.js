const fs = require('fs');
const p = 'c:/Users/Samnkelisiwe/bluebrainssoftwares/front-end/src/views/ServicesView.vue';
let c = fs.readFileSync(p, 'utf8');

// Fix 1: close services-grid div (10 spaces) and container div (8 spaces)
c = c.replace(
  '          </div>\n      </div>\n    </section>\n\n    <section class="process-section">',
  '          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class="process-section">'
);

// Fix 2: close process-grid div (10 spaces) and container div (8 spaces)
c = c.replace(
  '          </div>\n      </div>\n    </section>\n\n    <section class="cta-section">',
  '          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class="cta-section">'
);

// Fix 3: close container div (8 spaces) inside cta-section
c = c.replace(
  '          <RouterLink to="/contact" class="btn-primary">Start Your Project</RouterLink>\n        </div>\n    </section>',
  '          <RouterLink to="/contact" class="btn-primary">Start Your Project</RouterLink>\n        </div>\n      </div>\n    </section>'
);

fs.writeFileSync(p, c, 'utf8');

// Verify
const c2 = fs.readFileSync(p, 'utf8');
const ok = c2.includes('        </div>\n      </div>\n    </section>');
console.log(ok ? 'All fixed!' : 'Failed');
