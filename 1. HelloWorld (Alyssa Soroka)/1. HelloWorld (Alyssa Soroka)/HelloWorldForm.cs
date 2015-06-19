using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace HelloWorld
{
    public partial class frmHelloWorld : Form
    {
        public frmHelloWorld()
        {
            InitializeComponent();

            lblHelloWorld.Text = Convert.ToString("Hello Laura");
            
        }

        private void lblAuthor_Click(object sender, EventArgs e)
        {
            foreach (Control aControlObject in this.Controls)
            {
                aControlObject.BackColor = Color.Fuchsia;
            }
        }


        private void frmHelloWorld_Load(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {
            this.Close();
        }


    }
}
