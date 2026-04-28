const fs = require('fs');
const p = 'c:/Users/Samnkelisiwe/bluebrainssoftwares/front-end/src/views/ServicesView.vue';
let c = fs.readFileSync(p, 'utf8');

// Fix 1: close services-grid (8 spaces) before container close (6 spaces)
c = c.replace(
  '          </div>\n      </div>\n    </section>\n\n    <section class="process-section">',
  '          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class="process-section">'
);

// Fix 2: close process-grid (8 spaces) before container close (6 spaces)
c = c.replace(
  '          </div>\n      </div>\n    </section>\n\n    <section class="cta-section">',
  '          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class="cta-section">'
);

// Fix 3: close container (6 spaces) before section close (4 spaces)
c = c.replace(
  '          <RouterLink to="/contact" class="btn-primary">Start Your Project</RouterLink>\n        </div>\n    </section>',
  '          <RouterLink to="/contact" class="btn-primary">Start Your Project</RouterLink>\n        </div>\n      </div>\n    </section>'
);

fs.writeFileSync(p, c, 'utf8');
console.log(c.includes('</div>\n        </div>\n      </div>\n    </section>') ? 'Fixed all!' : 'Some fixes may have failed');
