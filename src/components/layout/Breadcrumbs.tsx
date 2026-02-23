import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import Link from "@mui/material/Link";
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';

interface MuiBreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
  style?: React.CSSProperties;
}

export default function Breadcrumbs({ breadcrumbs, style }: MuiBreadcrumbsProps) {
  return (
    <div className="breadcrumbs" role="presentation" style={style}>
      <MuiBreadcrumbs
        aria-label="breadcrumb"
        sx={{ '& .MuiBreadcrumbs-separator': { marginLeft: 0.5, marginRight: 0.5 } }}
        separator={
          <KeyboardArrowRightSharpIcon className="breadcrumb-arrow" />
        }
      >
        <Link
          color={"inherit"}
          underline={"hover"}
          href={"/"}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <HomeIcon fontSize="small" sx={{ opacity: 0.8 }} />
        </Link>
        {breadcrumbs.map((breadcrumb, index) => (
          <Link
            key={index}
            color={"inherit"}
            underline={breadcrumb.active ? "none" : "hover"}
            href={breadcrumb.active ? undefined : breadcrumb.href}
          >
            {breadcrumb.label}
          </Link>
        ))}
      </MuiBreadcrumbs>
    </div>
  );
}
